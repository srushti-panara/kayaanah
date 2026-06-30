import json
import numpy as np
import tensorflow as tf

from PIL import Image

MODEL_PATH = "model/saved_model"

model = tf.saved_model.load(MODEL_PATH)

infer = model.signatures["serving_default"]

with open("model/class_names.json", "r") as f:
    class_names = json.load(f)


def preprocess(image_path):

    image = Image.open(image_path).convert("RGB")
    image = image.resize((224,224))

    image = np.array(image).astype(np.float32)
    image = image / 255.0

    image = np.expand_dims(image, axis=0)

    return image


def predict(image_path):

    image = preprocess(image_path)

    tensor = tf.convert_to_tensor(image)

    output = infer(tensor)

    raw_output = list(output.values())[0].numpy()

    print("=" * 60)
    print("Raw output:", raw_output)
    print("=" * 60)
    
    prediction = float(raw_output[0][0])

    confidence = float(prediction)

    if confidence >= 0.5:
        disease = class_names[1]
        confidence = confidence * 100
    else:
        disease = class_names[0]
        confidence = (1-confidence)*100

    return {
        "prediction": disease,
        "confidence": round(confidence,2)
    }
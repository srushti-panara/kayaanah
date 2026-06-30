from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os

from predict import predict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message":"Kāyaanah Vision API Running"
    }


@app.post("/predict")
async def prediction(file: UploadFile = File(...)):

    filepath = os.path.join(UPLOAD_FOLDER,file.filename)

    with open(filepath,"wb") as buffer:
        shutil.copyfileobj(file.file,buffer)

    result = predict(filepath)

    os.remove(filepath)

    return result
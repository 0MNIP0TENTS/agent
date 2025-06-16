from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from agent.core import SamIdentityAgent


app = FastAPI()
sam = SamIdentityAgent()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Samiamgodism Agent Online"}

@app.get("/reflect")
def reflect_input(thought: str = Query(...)):
    return {"response": sam.reflect(thought)}

@app.get("/identity")
def get_identity():
    return sam.who_am_i()
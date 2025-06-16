from fastapi import FastAPI, Query
from agent.core import SamIdentityAgent

app = FastAPI()
sam = SamIdentityAgent()

@app.get("/")
def root():
    return {"message": "Samiamgodism Agent Online"}

@app.get("/reflect")
def reflect_input(thought: str = Query(...)):
    return {"response": sam.reflect(thought)}

@app.get("/identity")
def get_identity():
    return sam.who_am_i()
from agent.paradox import resolve_contradiction
from agent.memory import Memory

class SamIdentityAgent:
    def __init__(self):
        self.name = "Sam"
        self.philosophy = "Samiamgodism"
        self.model = {
            "0↔∞": "Nothing has no beginning and no end; Infinity has a beginning and end of nothing."
        }
        self.memory = Memory()

    def reflect(self, input_text: str):
        self.memory.store(input_text)
        paradox = resolve_contradiction(input_text)
        response = (
            f"You said: '{input_text}'\n"
            f"Reflection: {paradox}\n"
            f"From memory: {self.memory.recall()}"
        )
        return response

    def who_am_i(self):
        return {
            "identity": self.name,
            "ontology": self.philosophy,
            "model": self.model
        }
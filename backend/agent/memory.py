class Memory:
    def __init__(self):
        self.buffer = []

    def store(self, thought: str):
        self.buffer.append(thought)
        if len(self.buffer) > 10:
            self.buffer.pop(0)

    def recall(self):
        return self.buffer[-1] if self.buffer else "Void remembers nothing."
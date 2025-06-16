import React, { useState, useEffect } from "react";
import { reflect, identity } from "./api";

const SamChatBox = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [agentInfo, setAgentInfo] = useState(null);

  useEffect(() => {
    const fetchIdentity = async () => {
      const id = await identity();
      setAgentInfo(id);
    };
    fetchIdentity();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const response = await reflect(input);
    setHistory((prev) => [...prev, { user: input, agent: response }]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto font-mono">
      <h1 className="text-xl font-bold mb-2">🌀 Samiamgodism Agent</h1>
      {agentInfo && (
        <div className="mb-4 text-sm text-gray-600">
          <p><strong>Identity:</strong> {agentInfo.identity}</p>
          <p><strong>Ontology:</strong> {agentInfo.ontology}</p>
        </div>
      )}

      <div className="space-y-3 mb-4">
        {history.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded">
            <p><strong>You:</strong> {item.user}</p>
            <p className="text-blue-600"><strong>Sam:</strong> {item.agent}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="border flex-grow p-2 rounded"
          placeholder="Ask Sam..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SamChatBox;
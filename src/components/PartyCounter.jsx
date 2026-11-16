import { useState } from "react";

function PartyCounter() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setPeople([...people, { id: Date.now(), name: trimmed }]);
    setName("");
  };

  const removePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Despedida de Solteiro
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Ribeirinho</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-red-600">{people.length}</p>
            <p className="text-gray-500 mt-1">
              {people.length === 1 ? "pessoa confirmada" : "pessoas confirmadas"}
            </p>
          </div>

          <form onSubmit={addPerson} className="flex gap-2 mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome da pessoa..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Adicionar
            </button>
          </form>

          {people.length > 0 && (
            <ul className="space-y-2">
              {people.map((person, index) => (
                <li
                  key={person.id}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                >
                  <span className="text-gray-800">
                    <span className="text-gray-400 mr-2">{index + 1}.</span>
                    {person.name}
                  </span>
                  <button
                    onClick={() => removePerson(person.id)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default PartyCounter;

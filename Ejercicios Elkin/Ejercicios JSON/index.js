document.addEventListener('DOMContentLoaded', function() {
    // El JSON con los miembros
    const data = {
        "miembros": [
            {"nombre": "Juan"},
            {"nombre": "María"},
            {"nombre": "Luis"},
            {"nombre": "Ana"},
        ]
    }


     // Obtén el elemento <ul> del HTML
     const listaMiembros = document.getElementById('listaMiembros');
     // Recorre los miembros y crea elementos <li>
    data.miembros.forEach(miembro => {
        const li = document.createElement('li');
        li.textContent = miembro.nombre;
        listaMiembros.appendChild(li);
    });
});

JSON.parse({});
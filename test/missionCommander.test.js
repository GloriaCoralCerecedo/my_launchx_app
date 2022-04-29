const MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  })

  describe("Clase  Mission Commander", () => {
    test('1) Crear un objeto a mission commander', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe(a);
    });
})
  
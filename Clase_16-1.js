const PATH = "tareas/clase-6/Tarea-1/tarea1_clase6.html";
const NUMERO_INTEGRANTES = 2;

describe("Testeando tarea 1 clase 6", () => {
  it("Testea el uso correcto de la aplicacion", () => {
    cy.visit(PATH);

    cy.get('input[id="numero-de-familiares"]').type("2");
    cy.get('button[id="aceptar"]').click();

    cy.get('button[id="limpiar"]').should("be.visible");
    cy.get('button[id="calcular"]').should("be.visible");

    cy.get('div[id="integrantes"]')
      .find("div")
      .should("have.length", NUMERO_INTEGRANTES);

    for (let i = 0; i < 2; i++) {
      cy.get(`input[id='input-${i + 1}']`).type(`${i + 23}`);
    }

    cy.get('button[id="calcular"]').click();

    cy.get('strong[id="resultados"]').should("be.visible");
    cy.get('strong[id="resultados"]').should(
      "have.text",
      "La mayor edad es 26, la menor edad es 23, y el promedio de edades es 21.5"
    );
  });
});

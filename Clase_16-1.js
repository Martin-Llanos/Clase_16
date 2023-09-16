const PATH = "tareas/clase-6/Tarea-1/tarea1_clase6.html";
const NUMERO_INTEGRANTES = 5;

const INTEGRANTE_1 = 21;
const INTEGRANTE_2 = 23;
const INTEGRANTE_3 = 25;
const INTEGRANTE_4 = 27;
const INTEGRANTE_5 = 29;


describe("Testeando tarea 1 clase 6", () => {
  it("Testea el uso correcto de la aplicacion", () => {
    cy.visit(PATH);

    cy.get('input[id="numero-de-integrantes"]').type("5");
    cy.get('button[id="aceptar"]').click();

    cy.get('button[id="limpiar"]').should("be.visible");
    cy.get('button[id="calcular"]').should("be.visible");

    cy.get('div[id="integrantes"]')
      .find("div")
      .should("have.length", 5);

    for (let i = 0; i < 2; i++) {
      cy.get(`input[id='input-${i + 1}']`).type(`${i + 29}`);
    }

    cy.get('button[id="calcular"]').click();

    cy.get('strong[id="resultados"]').should("be.visible");
    cy.get('strong[id="resultados"]').should(
      "have.text",
      "La mayor edad es 29, la menor edad es 21, y el promedio de edades es 25"
    );
  });
});

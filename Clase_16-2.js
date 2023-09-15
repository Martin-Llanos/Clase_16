const PATH = "tareas/clase-6/Tarea-2/tarea2_clase6.html";
const NUMERO_TRABAJADORES = 5;

describe("testeando tarea 2 de clase 6", () => {
  it("testea el uso correcto de la aplicación", () => {
    cy.visit(PATH);

    cy.get('button[id="agregar"]').click();
    cy.get('button[id="quitar"]').should("be.visible");
    cy.get('button[id="calcular"]').should("be.visible");

    for (let i = 1; i < NUMERO_TRABAJADORES; i++) {
      cy.get('button[id="agregar"]').click();
    }

    cy.get('div[id="integrantes"]')
      .find("div")
      .should("have.length", NUMERO_TRABAJADORES);

    for (let i = 0; i < NUMERO_TRABAJADORES; i++) {
      cy.get(`input[id="input-${i + 1}"]`).type(`${(i + 1) * 25000}`);
    }

    cy.get('button[id="calcular"]').click();
    cy.get('em[id="resultados"]').should(
      "have.text",
      "El mayor salario es $50000 el menor salario es $25000 el salario anual promedio es $20000 el salario mensual promedio es $15000"
    );
    cy.get('button[id="limpiar"]').should("be.visible");
  });
});

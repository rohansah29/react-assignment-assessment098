import mock from "../fixtures/cofeeitems.json";
import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

describe("react cofee house", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });  

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`Heading should be visible when component loads`, () => {
      cy.visit(url);
      cy.contains("h1", /Coffee House/).should("be.visible");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should make a get request to endpoint when clicked on Get Coffee button and disappear on UI once clicked on it", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get(".coffee_card").should("have.length", 20);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check all types of coffee are visible only checking no of items/coffee visible", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get(".get-coffee").should("not.exist")
      cy.get(".coffee_card").should("have.length", 20);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all titles of the coffee are displayed", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child).find("h3").should("contain", mock[index].title);
            cy.wrap(child).find("h5").should("contain", mock[index].price);
            cy.wrap(child).find(".place_order_button").should("be.visible");
            cy.wrap(child).find(".cancel_order_button").should("not.exist");
          }
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check place order button is there for every product and cancel order is not present by default", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child).find(".place_order_button").should("be.visible");
            cy.wrap(child).find(".cancel_order_button").should("not.exist");
          }
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all image of the product are displayed", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child)
              .find("img")
              .should("have.attr", "src")
              .should("include", mock[index].image);
          }
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Onclicking on place Order button, the button should get disabled and text content should change accordingly and also new button to cancel the order should be visible", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 4 === 0) {
            cy.wrap(child)
              .find(".place_order_button")
              .should("exist")
              .should("contain", `Place Order`)
              .click({ force: true })
              .should("contain", `Order Placed`)
              .should("be.disabled");
            cy.wrap(child)
              .find(".cancel_order_button")
              .should("exist")
              .should("contain", `Cancel Order`);
          }
        });
      cy.then(() => {
        acc_score += 3;
      });
    });
    it("Clicking on the cancel order button should make it have only place order button", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 5 === 0) {
            cy.wrap(child)
              .find(".place_order_button")
              .should("exist")
              .should("contain", `Place Order`)
              .should("be.visible")
              .click({ force: true })
              .should("contain", `Order Placed`)
              .should("be.disabled");
            cy.wrap(child)
              .find(".cancel_order_button")
              .should("exist")
              .should("contain", `Cancel Order`)
              .should("be.visible")
              .click({ force: true });
            cy.wrap(child).find(".cancel_order_button").should("not.exist");
            cy.wrap(child)
              .find(".place_order_button")
              .should("exist")
              .should("contain", `Place Order`)
              .should("be.visible")
              .should("not.be.disabled");
          }
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("When some one click on place order, cost should be visible in h6 tag", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 5 === 0) {
            cy.wrap(child)
              .find(".place_order_button")
              .should("exist")
              .should("contain", `Place Order`)
              .should("be.visible")
              .click({ force: true })
              .should("contain", `Order Placed`);
          }
        });
      cy.get("h6").should("exist").should("contain", "Total cost");
      cy.get("h6").should("exist").should("contain", 1984);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("When some one click on place order and cancel the order, cost should be visible in h6 tag and disappear when value is 0", () => {
      cy.intercept("GET", "**/get-coffee").as("get-coffee-list");
      cy.visit(url);
      cy.get(".get-coffee").should("be.visible").click();
      cy.wait("@get-coffee-list");
      let price = 0;
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 6 === 0) {
            price = price + mock[index].price;
            cy.wrap(child)
              .find(".place_order_button")
              .should("exist")
              .should("contain", `Place Order`)
              .should("be.visible")
              .click({ force: true })
              .should("contain", `Order Placed`);
            cy.get("h6").should("exist").should("contain", price);
          }
        });
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 6 === 0) {
            price = price - mock[index].price;
            cy.wrap(child).find(".cancel_order_button").should("exist").click();
            if (price) {
              cy.get("h6").should("exist").should("contain", price);
            } else {
              cy.get("h6").should("not.exist");
            }
          }
        });

      cy.then(() => {
        acc_score += 3;
      });
    });
    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
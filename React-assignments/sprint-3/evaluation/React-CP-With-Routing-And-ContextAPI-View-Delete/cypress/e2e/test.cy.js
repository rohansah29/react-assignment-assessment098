import data from "../../submissionData.json"; // do not create this file
import mockdata from "../fixtures/dbjsonData.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-CP-With-Routing-And-ContextAPI-View-Delete", function () {
    let acc_score = 1;

    beforeEach(() => {
      cy.visit(url);
      // cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      cy.writeFile("db.json", mockdata, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it(`Check the Initial structure of authProvider`, () => {
      cy.window()
        .its("store.authState")
        .should("deep.equal", { username: null, isAuth: false });      
      cy.window().then((win) => {
        expect(win.store.loginUser).to.be.a("function");
        expect(win.store.logoutUser).to.be.a("function");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`Check home page with proper text is visible or not and problems link in the Login page is working`, () => {
      cy.visit(url);
      cy.get('[data-cy="welcome-text"] h1').should(
        "contain",
        "Welcome to Masai's Coding Platform. Click here to"
      );
      cy.get('[data-cy="welcome-text"] h1').should("contain", "Login");

      cy.get('[data-cy="welcome-text"] a').click({ force: true });
      cy.url().should("eq", url + "login");
      cy.get(`[data-testid="login"] a`).click({force:true});
      cy.url().should("contain","problems")
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`Should be able to log in with correct credentials`, () => {
      cy.intercept("GET", "**/users").as("login");
      cy.visit(url + "login");

      cy.get('[data-cy="login-email"]').clear().type(mockdata.users[2].email);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(mockdata.users[2].password);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login");
      cy.window().its("store.authState.isAuth").should("eq", true);
      cy.window()
        .its("store.authState.username")
        .should("eq", mockdata.users[2].username);
      cy.url().should("eq", url + "problems");
      cy.get(`[data-testid="navbar"] span`).should(
        "contain",
        mockdata.users[2].username
      );
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`Should display all the problems on the problems page`, () => {
      cy.intercept("GET", "**/cpproblems*").as("getProblems");
      cy.visit(url + `problems`);
      cy.wait("@getProblems");
      cy.get("tbody")
        .children()
        .should("have.length", mockdata.cpproblems.length);
      cy.get("tbody")
        .children()
        .each((trow, ind) => {
          if (ind % 3 === 0) {
            cy.wrap(trow)
              .find("td:nth-child(1)")
              .should("contain", mockdata.cpproblems[ind].Name);
            cy.wrap(trow)
              .find("td:nth-child(2)")
              .should("contain", mockdata.cpproblems[ind].Category);
            cy.wrap(trow)
              .find("td:nth-child(3)")
              .should("contain", mockdata.cpproblems[ind].Author);
            cy.wrap(trow)
              .find("td:nth-child(4)")
              .should("contain", mockdata.cpproblems[ind].Type);
            cy.wrap(trow)
              .find("td:nth-child(5)")
              .should("contain", mockdata.cpproblems[ind].Tags.join(", "));
            cy.wrap(trow)
              .find("td:nth-child(6)")
              .should("contain", mockdata.cpproblems[ind].Difficulty);
            cy.wrap(trow)
              .find("td:nth-child(7)")
              .should("contain", mockdata.cpproblems[ind].Status);
            cy.wrap(trow)
              .find("td:nth-child(8)")
              .should("contain", mockdata.cpproblems[ind]["Max_Marks"]);
          }
        });       
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`Check whether SingleProblem and DeletePage pages are protected or not`, () => {
      cy.visit(url + "problems/:id/delete");
      cy.url().should("eq", url + "login");
      cy.visit(url + "problems/5/view");
      cy.url().should("eq", url + "login");
      cy.intercept("GET", "**/cpproblems*").as("getProblems");
      cy.visit(url + `problems`);
      cy.wait("@getProblems");
      cy.location("pathname").should("contain", "problems");
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`Able to view details of a problem on the SingleProblem page`, () => {
      cy.intercept("GET", "**/users").as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(mockdata.users[2].email);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(mockdata.users[2].password);
      cy.intercept("GET", "**/cpproblems*").as("getProblems");
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login");
      cy.location("pathname").should("contain", "problems");
      cy.wait("@getProblems");
      cy.get("tbody tr")
        .eq(1)
        .find("td:nth-child(1)")
        .should("contain", mockdata.cpproblems[1].Name);
      cy.intercept("GET","**/cpproblems/**").as("getSingleProblem")
      cy.get("tbody tr").eq(1).find("td:last-child select").select("View");     
      cy.location("pathname").should("contain", "problems/2/view");
      cy.wait("@getSingleProblem")
      cy.get(`[data-testid="view-problem"]`).should("exist");
      cy.get(`[data-testid="view-problem"] h2`).should(
        "contain",
        mockdata.cpproblems[1].Name
      );
      cy.get(`[data-testid="view-problem"] p`)
        .eq(0)
        .should("contain", mockdata.cpproblems[1].Category);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(1)
        .should("contain", mockdata.cpproblems[1].Author);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(2)
        .should("contain", mockdata.cpproblems[1].Type);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(3)
        .should("contain", mockdata.cpproblems[1].Tags.join(", "));
      cy.get(`[data-testid="view-problem"] p`)
        .eq(4)
        .should("contain", mockdata.cpproblems[1].Difficulty);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(5)
        .should("contain", mockdata.cpproblems[1].Status);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(6)
        .should("contain", mockdata.cpproblems[1]["Max_Marks"]);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(7)
        .should("contain", mockdata.cpproblems[1]["GitHub_URL"]);
      cy.get(`[data-testid="view-problem"] p`)
        .eq(8)
        .should("contain", mockdata.cpproblems[1]["Problem_Statement"]);
      cy.go(-1);
      cy.wait(500);
      cy.get("tbody tr").eq(2).find("td:last-child select").select("View");
      cy.location("pathname").should("contain", "problems/3/view");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Able to delete the problem by making an appropriate DELETE request", () => {
      cy.intercept("GET", "**/users").as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(mockdata.users[2].email);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(mockdata.users[2].password);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login");
      cy.wait(2000);
      cy.url().should("contain","problems")      
      cy.get("tbody tr").should("have.length", mockdata.cpproblems.length);
      cy.intercept("GET","**/cpproblems/**").as("getSingleProblemDetail")
      cy.get("tbody tr").eq(6).find("td:last-child select").select("Delete");      
      cy.location("pathname").should("contain", `/problems/7/delete`);
      cy.wait("@getSingleProblemDetail")
      cy.wait(100);
      cy.intercept("DELETE", "**/cpproblems/7").as("deleteCpProblem");
      cy.get("button").eq(1).should("contain", "Delete").click({ force: true });
      cy.wait("@deleteCpProblem");
      cy.get("tbody tr").should("have.length", mockdata.cpproblems.length - 1);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`Loader component should exist between the API req and res from the json server`, () => {
      cy.intercept("GET", "**/cpproblems", (req, res) => {
        req.reply({ delay: 2000, body: mockdata.cpproblems });
      }).as("getProblems");
      cy.visit(url + "problems");
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@getProblems");
      cy.wait(100);
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.intercept("GET", "**/users", (req, res) => {
        req.reply({ delay: 2000, body: mockdata.users });
      }).as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(mockdata.users[2].email);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(mockdata.users[2].password);
      cy.get('[data-cy="login-form"]').submit();
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@login");
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.url().should("contain","problems");
      cy.intercept("GET","**/cpproblems/**",(req,res)=>{
        req.reply((res)=>{
          res.delay=2000
        })        
      }).as("getSingleProblem")
      cy.get("tbody tr").eq(2).find("td:last-child select").select("View");     
      cy.location("pathname").should("contain", "problems/3/view");
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@getSingleProblem");
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check navBar login link and logout button are working fine and context API has also Updated accordingly", () => {
      cy.visit(url);
      cy.wait(200);
      cy.get(`[data-testid="navbar"] a`)
        .eq(1)
        .should("contain", "Login")
        .click();
      cy.location("pathname").should("contain", "login");
      cy.intercept("GET", "**/users").as("login");
      cy.get('[data-cy="login-email"]').clear().type(mockdata.users[2].email);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(mockdata.users[2].password);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login");
      cy.wait(100);
      cy.window().its("store.authState.isAuth").should("eq", true);
      cy.window()
        .its("store.authState.username")
        .should("eq", mockdata.users[2].username);
      cy.get(`[data-testid="navbar"] span`).should(
        "contain",
        mockdata.users[2].username
      );
      cy.get("button").eq(0).should("contain", "Logout").click();
      cy.wait(100);
      cy.window().its("store.authState.isAuth").should("eq", false);
      cy.window().its("store.authState.username").should("eq", null);
      cy.then(() => {
        acc_score += 2;
      });
    });

    after(() => {
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
    });
  });
});
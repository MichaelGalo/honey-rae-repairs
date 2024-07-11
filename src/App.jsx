import "./App.css";
import { CustomersList } from "./components/customers/CustomersList.jsx";
import { EmployeesList } from "./components/employees/EmployeesList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
// Example of importing Bootstrap CSS in index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <>
      <TicketList />
      {/* <CustomersList /> */}
      {/* <EmployeesList /> */}
    </>
  );
};

import "./Employees.css";

export const Employees = ({ user }) => {
  return (
    <div key={user.id} className="user employees">
      <div>
        <div className="user-info">Name</div>
        <div>{user.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};

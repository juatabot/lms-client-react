import React from "react";

export const Profile = () =>
  <div class="container">
    <h1>Profile</h1>
    <div class="input-container">
      <div class="wbdv-field wbdv-username">
        <div class="field-name">Username: </div>
        <input class="form-control" id="usernameFld" readonly value="Juat" />
      </div>
      <div class="wbdv-field wbdv-password">
        <div class="field-name">Password: </div>
        <input type="password" class="form-control" id="phoneFld" />
      </div>
      <div class="wbdv-field wbdv-phone">
        <div class="field-name">Phone: </div>
        <input class="form-control" id="phoneFld" />
      </div>
      <div class="wbdv-field wbdv-email">
        <div class="field-name">Email: </div>
        <input class="form-control" id="emailFld" type="email" />
      </div>
      <div class="wbdv-field wbdv-dob">
        <div class="field-name">Date of Birth: </div>
        <input class="form-control" id="dobFld" type="date" />
      </div>
      <div class="wbdv-field wbdv-role">
        <div class="field-name">Role:</div>
        <div class="dropdown">
          <select id="roleFld" class="form-control">
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
      </div>
    </div>
    <div class="wbdv-button wbdv-update">
      <a href="../index.html">
        <button class="btn btn-secondary wbdv-button wbdv-logout" id="logoutBtn">Logout</button>
      </a>
    </div>
  </div>
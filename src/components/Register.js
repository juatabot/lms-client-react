import React from "react";

export const Register = () =>
  <div class="container">
    <h1>Register</h1>
    <div class="input-container">
      <a href="../index.html"><i class="fas fa-window-close"></i></a>
      <div class="wbdv-field wbdv-username">
        <div class="field-name">Username: </div>
        <input class="form-control" id="usernameFld" placeholder="Juat" />
      </div>
      <div class="wbdv-field wbdv-password">
        <div class="field-name">Password: </div>
        <input class="form-control" id="pwdFld" type="password" />
      </div>
      <div class="wbdv-field wbdv-password-verify">
        <div class="field-name">Confirm password: </div>
        <input class="form-control" id="cpwdFld" type="password" />
      </div>

      <div class="wbdv-button">
        <a href="../profile/profile.template.client.html">
          <button class="btn btn-primary wbdv-field wbdvregister" id="updateBtn">Sign up</button>
        </a>
        <a href="../login/login.template.client.html">
          <button class="btn btn-secondary wbdv-field wbdv-login" id="logoutBtn">Log in</button>
        </a>

      </div>
    </div>
  </div>

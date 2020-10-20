import React from "react";

export const Login = () =>
  <div class="container">

    <h1>Sign In</h1>

    <form>

      <div class="form-group row">
        <label for="username" class="col-sm-2 col-form-label">
          <p>Username</p>
        </label>
        <div class="col-sm-10">
          <input class="form-control wbdv-field wbdv-username" id="username" placeholder="Juat" />
        </div>
      </div>

      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">
          Password
    </label>
        <div class="col-sm-10">
          <input type="password" class="form-control wbdv-field wbdv-password" id="password" placeholder="123qwe#$%" />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">

        </label>
        <div class="col-sm-10">
          <a href="../profile/profile.template.client.html">
            <button type="button" class="btn btn-primary wbdv-button wbdv-login">Sign in</button>
          </a>

          <button type="button" class="btn btn-secondary">Cancel</button>
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-form-label">
          <div class="extras">
            <div class="col-12 wbdv-link wbdv-forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <br />

            <div class="col-6 wbdv-link wbdv-register">
              <a href="../register/register.template.client.html">Sign up</a>
            </div>
          </div>
        </label>
      </div>
    </form>
  </div>


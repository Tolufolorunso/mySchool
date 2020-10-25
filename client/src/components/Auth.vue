<template>
  <form @submit.prevent="submit" id="login-from">
    <Alert :msgArray="error" alert="alert-warning" />
    <div
      class="form-group"
      :class="{ invalid: !name.isValid }"
      v-if="isRegister"
    >
      <label for="name">Fullname</label>
      <input
        type="text"
        placeholder="Surname Firstname"
        class="form-control"
        id="name"
        aria-describedby="nameHelp"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid" style="color: red;font-size:11px;">
        Name must be greater than 4 charasters
      </p>
    </div>
    <div
      class="form-group"
      :class="{ invalid: !username.isValid }"
      v-if="isRegister"
    >
      <label for="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        class="form-control"
        id="username"
        aria-describedby="usernameHelp"
        v-model.trim="username.val"
        @blur="clearValidity('username')"
      />
      <p v-if="!username.isValid" style="color: red;font-size:11px;">
        Username must not be empty
      </p>
    </div>
    <div class="form-group" :class="{ invalid: !email.isValid }">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="eg@name.com"
        aria-describedby="emailHelp"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid" style="color: red;font-size:11px;">
        Email must not be empty
      </p>
    </div>
    <div class="form-group" :class="{ invalid: !password.isValid }">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="********"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid" style="color: red;font-size:11px;">
        Password must not be empty
      </p>
      <p v-if="!passwordMatch" style="color: red;font-size:11px;">
        Password not matched
      </p>
    </div>
    <div
      class="form-group"
      :class="{ invalid: !password2.isValid }"
      v-if="isRegister"
    >
      <label for="password">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="password2"
        placeholder="********"
        v-model.trim="password2.val"
        @blur="clearValidity('password2')"
      />
      <p v-if="!password2.isValid" style="color: red;font-size:11px;">
        Password must not be empty
      </p>
      <p v-if="!passwordMatch" style="color: red;font-size:11px;">
        Password not matched
      </p>
    </div>
    <p v-if="!formIsValid">Please fix above errors and submit again</p>
    <button type="submit" class="btn login">
      <span v-if="!loading">{{ buttonText }}</span
      ><span v-else><base-spinner width="20" height="20"></base-spinner></span>
    </button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import Alert from "./Alert";

export default {
  props: {
    submitForm: Function,
    loading: Boolean,
    buttonText: String,
    isRegister: Boolean
  },
  components: {
    Alert
  },
  computed: {
    ...mapGetters(["error"])
  },
  data() {
    return {
      password: {
        val: "",
        isValid: true
      },
      email: {
        val: "",
        isValid: true
      },
      username: {
        val: "",
        isValid: true
      },
      name: {
        val: "",
        isValid: true
      },
      password2: {
        val: "",
        isValid: true
      },
      formIsValid: true,
      passwordMatch: true
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validate() {
      this.formIsValid = true;
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.name.val === "" && this.name.val < 4 && this.isRegister) {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.password2.val === "" && this.isRegister) {
        this.password2.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val !== this.password2.val && this.isRegister) {
        this.passwordMatch = false;
        this.formIsValid = false;
      }
    },
    submit() {
      this.validate();
      if (!this.formIsValid) {
        return;
      }

      if (this.isRegister) {
        // register
        this.submitForm({
          email: this.email.val,
          password: this.password.val,
          password2: this.password2.val,
          name: this.name.val,
          username: this.username.val
        });
        return;
      }

      // Login
      this.submitForm({
        email: this.email.val,
        password: this.password.val
      });
    }
  }
};
</script>

<style>
.form-card {
  max-width: 700px;
  width: 100%;
}
.login,
.login:active {
  background: #5fcf80;
  color: #fff;
  border: 1px solid #5fcf80;
  outline: none;
  font-weight: 500;
}
.login:hover,
.login:active {
  background: rgba(46, 131, 71, 0.863);
  border: 1px solid #5fcf80;
  color: #fff;
  outline: none;
}
.invalid input {
  border: 1px solid red;
}
#login-from label {
  color: #5fcf80;
}
</style>
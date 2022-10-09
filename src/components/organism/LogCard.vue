<template>
  <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true" />

    <div class="signup">
      <form>
        <label for="chk" aria-hidden="true">Registrarse</label>
        <input type="text" name="txt" placeholder="Usuario" required="true" />
        <input type="email" name="email" placeholder="Email" required="true" />
        <input
          type="password"
          name="pswd"
          placeholder="Contraseña"
          required="true"
        />
        <button>Registrarse</button>
      </form>
    </div>

    <div class="login">
      <form>
        <label for="chk" aria-hidden="true">Ingresar</label>
        <input type="email" name="email" placeholder="Email" required="true" />
        <input
          type="password"
          name="pswd"
          placeholder="Contraseña"
          required="true"
        />
        <button>Ingresar</button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/style.scss";
.main {
  width: 350px;
  height: 500px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.1px);
  -webkit-backdrop-filter: blur(8.1px);
  border: 1px solid rgba(255, 255, 255, 0.48);
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: $hover-color;
    opacity: 1; /* Firefox */
  }
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: $light-gray;
    opacity: 1; /* Firefox */
  }
}
label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 20px;
  background: none;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px $main-color solid;
  color: white;
  transition: 100ms ease;
}
input:focus{
    border-bottom: 2px $hover-color solid;
    transition: 100ms ease;
}
button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: $main-color;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: $hover-color;
}
.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
  input{
    color: $main-color;
  }
}
.login label {
  color: $main-color;
  transform: scale(0.6);
  padding-top: 10px;
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>

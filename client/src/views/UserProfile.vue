<template>
  <div class="page-holder bg-gray-100">
    <header class="header bg-white shadow align-self-end py-3 px-xl-5 w-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center text-md-start fw-bold">
            <p class="mb-2 mb-md-0 fw-bold">Symphony Profile</p>
          </div>
          <div class="col-md-6 text-center text-md-end text-gray-400">
            <p class="mb-0">Fawez</p>
          </div>
        </div>
      </div>
    </header>
    <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
      <!-- Page Header-->
      <div class="page-header mb-4">
        <h1 class="page-heading">Profile</h1>
      </div>
      <section>
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-profile mb-4">
              <div
                class="card-header"
                style="
                  background-image: url(https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg);
                "
              ></div>
              <div class="card-body text-center">
                <img
                  class="card-profile-img"
                  src="https://avatars.githubusercontent.com/u/102802976?v=4"
                  alt="Jassa Rich"
                />
                <h3 class="mb-3">Fawez Ferjaoui</h3>
                <p class="mb-4">Full Stack Web Developer</p>
                <button class="btn btn-outline-dark btn-sm">
                  <span class="fab fa-twitter"></span> Follow
                </button>
              </div>
            </div>
            <form class="card mb-4">
              <div class="card-header">
                <h4 class="card-heading">My Profile</h4>
              </div>
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-auto d-flex align-items-center">
                    <img
                      class="avatar avatar-lg p-1"
                      src="https://avatars.githubusercontent.com/u/102802976?v=4"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <label class="form-label">Name</label>
                    <input class="form-control" placeholder="Your name" />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Bio</label>
                  <textarea class="form-control" rows="8">
I believe that learning the piano can be a powerful experience that will enhance your life in many ways, and I enjoy helping my students learn some of the life lessons and critical skills that come along with mastering the ins and outs of the instrument. </textarea
                  >
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input class="form-control" placeholder="you@domain.com" />
                </div>
                <label class="form-label">Password</label>
                <input class="form-control" type="password" value="password" />
              </div>
              <div class="card-footer text-end">
                <button class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
          <div class="col-lg-8">
            <div class="card overflow-hidden mb-4">
              <div class="card-header">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Message"
                  />
                  <button class="btn btn-outline-secondary" type="button">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
              <div class="list-group rounded-0">
                <div
                  class="list-group-item border-start-0 border-end-0 py-5 border-top-0"
                >
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        class="avatar avatar-lg p-1"
                        src="https://avatars.githubusercontent.com/u/102802976?v=4"
                        alt="Jassa Rich"
                      />
                    </div>
                    <div class="flex-grow-1 ps-3">
                      <small class="float-right">10 mins ago</small>
                      <h5 class="fw-bold">Fawez Ferjaoui</h5>
                      <div class="text-muted text-sm">
                        I'm looking for a teacher to help me in finishing Symphony steps from beginner to Master
                      </div>
                      <div class="d-flex mt-4">
                        <div class="flex-shrink-0">
                          <img
                            class="avatar avatar-md p-1"
                            src="https://avatars.githubusercontent.com/u/100468775?v=4"
                            alt="Serenity Mitchelle"
                          />
                        </div>
                        <div class="flex-grow-1 ps-3 text-sm text-muted">
                          <strong class="text-dark">Moez Hamza: </strong
                          >My teaching experience began in high school, teaching beginning piano lessons to a handful of young friends and neighbors in Boise, Idaho. Though I still teach many young friends and neighbors here in Boston, my approach and skill have come a long way since those early years! With a bachelors and masters degree in piano performance, two semesters of piano pedagogy courses during graduate school, over seventy-five students, active membership in the Music Teachers National Association, more than a dozen student recitals, and thousands of lessons taught, I am very experienced and continue to love being a piano teacher.
                        </div>
                      </div>
                      <div class="d-flex mt-4">
                        <div class="flex-shrink-0">
                          <img
                            class="avatar avatar-md p-1"
                            src="https://avatars.githubusercontent.com/u/102802976?v=4"
                            alt="Tony O'Brian"
                          />
                        </div>
                        <div class="flex-grow-1 ps-3 text-sm text-muted">
                          <strong class="text-dark">Fawez Ferjaoui: </strong>
                          I'm still learning many things about piano and i hope by the end of the month i finish the beginner level
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-start-0 border-end-0 py-5">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        class="avatar avatar-lg p-1"
                        src="https://avatars.githubusercontent.com/u/102802976?v=4"
                        alt="Jassa Rich"
                      />
                    </div>
                    <div class="flex-grow-1 ps-3">
                      <small class="float-right">12 mins ago</small>
                      <h5 class="fw-bold">Fawez Ferjaoui</h5>
                      <div class="text-muted text-sm">
                        I just finished the beginner level its so easy 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-start-0 border-end-0 py-5">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        class="avatar avatar-lg p-1"
                        src="https://avatars.githubusercontent.com/u/102802976?v=4"
                        alt="Jassa Rich"
                      />
                    </div>
                    <div class="flex-grow-1 ps-3">
                      <small class="float-right">34 mins ago</small>
                      <h5 class="fw-bold">Fawez Ferjaoui</h5>
                      <div class="text-muted text-sm">
                      In the Beginner level There is some difficulty specielly in the second video can any one help me ? 
                      </div>
                      <div class="d-flex mt-4">
                        <div class="flex-shrink-0">
                          <img
                            class="avatar avatar-md p-1"
                            src="https://avatars.githubusercontent.com/u/102801929?v=4"
                            alt="Javier Gregory"
                          />
                        </div>
                        <div class="flex-grow-1 ps-3 text-sm text-muted">
                          <strong class="text-dark">Oussama Fajraoui: </strong
                          >Google is your best friend Noob -_- .
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form class="card mb-4">
              <div class="card-header">
                <h4 class="card-heading">Edit Profile</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6 col-md-3">
                    <div class="mb-4">
                      <label class="form-label">Username</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="mb-4">
                      <label class="form-label">Email address</label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">New password</label>
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Repeat Password</label>
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-end">
                <button class="btn btn-primary" type="submit">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center text-md-end text-gray-400">
                <button class="btn btn-danger" type="submit">
                  Log Out
                </button>         
         </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Profile extends Vue {}
</script>

<style>
.card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}
.card-header {
  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}
.bg-gray-100 {
  background-color: #f8f9fa !important;
}
body {
  font-family: "Poppins" !important;
}
.text-primary {
  color: #4650dd !important;
}
h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  line-height: 1.2;
}
.text-muted {
  color: #6c757d !important;
}
.lead {
  font-size: 1.125rem;
  font-weight: 300;
}
.text-sm {
  font-size: 0.7875rem !important;
}
h3,
.h3 {
  font-size: 1.575rem;
}
.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);

  flex-wrap: wrap;
}
a {
  color: #4650dd !important;
  text-decoration: underline !important;
  cursor: pointer;
}
.card-profile-img {
  position: relative;
  max-width: 8rem;
  margin-top: -6rem;
  margin-bottom: 1rem;
  border: 3px solid #fff;
  border-radius: 100%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  z-index: 2;
}
img,
svg {
  vertical-align: middle;
}
.avatar.avatar-lg {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
}
.avatar {
  display: inline-block;
  position: relative;
  width: 3rem;
  height: 3rem;
  text-align: center;
  border: #dee2e6;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  line-height: 3rem;
}
.form-control {
  color: #343a40;
}
.page-heading {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;
}
.contentDiv {
  padding-top: 4rem;
}
.card-profile .card-header {
  height: 9rem;
  background-position: center center;
  background-size: cover;
}
</style>

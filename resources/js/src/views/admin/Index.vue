<template>	
	<div class="h-100" v-if="isAdmin">
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        <img src="/favicon.ico" alt="">
        Avia Airways
      </a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
					<b-button @click="$store.dispatch('auth/logout')" squared variant="dark">
						Sign out
					</b-button>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/admin/dashboard" class="nav-link" :class="{ 'text-warning': $route.name === 'admin-dashboard' }">

                  <b-row>
                    <b-col cols="2" xl="1">
                      <i class="fal fa-analytics mr-3"></i>
                    </b-col>
                    <b-col>
                      Dashboard
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/reservations" class="nav-link"  :class="{ 'text-warning': $route.name === 'admin-reservations' }">
                  <b-row>
                    <b-col cols="2" xl="1">
                      <i class="fal fa-clipboard-list mr-3"></i>
                    </b-col>
                    <b-col>
                      Reservations
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/flights" class="nav-link"  :class="{ 'text-warning': $route.name === 'admin-flights' }">
                  <b-row>
                    <b-col cols="2" xl="1">
                      <i class="fal fa-plane-departure mr-3"></i>
                    </b-col>
                    <b-col>
                      Flights
                    </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
					<router-view />
        </main>
      </div>
    </div>
	</div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			isAdmin: 'auth/isAdmin',
			isLogged: 'auth/isLogged',
			isMeFetched: 'auth/isMeFetched',
		})
	},
	mounted() {
		console.log('logged', this.isLogged)
		console.log('is me fetched', this.isMeFetched)
		console.log('is admin', this.isAdmin)
		if (this.isLogged && this.isMeFetched) {
			if (!this.isAdmin) this.$router.push({ name: 'errors-not-authorized' })
		} else if (!this.isLogged) {
			this.$router.push({ name: 'errors-not-authorized' })
		}
	}
}
</script>

<style scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>
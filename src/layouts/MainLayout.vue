<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal style="background-color: rgba(238, 242, 223, 1)">
      <q-toolbar class="q-pt-sm">
        <q-toolbar-title>
          <div clickable class="q-pl-xl" @click="clickImg">
            <q-img class="img" src="~/assets/logo.png" />
          </div>
        </q-toolbar-title>
        <div class="head q-pr-xl" v-if="$q.screen.gt.sm">
          <q-btn flat label="Professionals" to="professional" />
          <q-btn flat label="Jobs" to="/job" />
          <q-btn flat label="Downloads" />
          <q-btn flat label="Login/Signup" to="/register" />
          <q-avatar size="50px" font-size="52px">
            <q-img src="~/assets/smalllogo.png" />
          </q-avatar>
        </div>
        <div class="head" v-else>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="right">
      <q-list>
        <q-item-label header v-if="$q.screen.gt.sm">
          <div class="q-pl-xl">
            <q-img class="img" src="~/assets/logo.png" />
          </div>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <div class="bg q-pt-xl q-pl-xl">
        <div class="full-width row" style="text-align: left">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div class="avatar q-pt-sm">
              <q-img src="~/assets/logo.png" />
            </div>
            <p>
              Thalai Hna zawng mek te tan, awlsam takin i hnathawh thiam zawng
              te zawng hmu zung zung rawh le.
            </p>
          </div>

          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 q-mt-md"
            style="text-align: center"
          >
            <div class="cat">CATEGORIES</div>
            <div>
              <p>Computer</p>
              <p>Professional</p>
              <p>Health &amp; Fitness</p>
              <p>Music</p>
              <p>Photography</p>
              <p>Household Services</p>
              <p>Mistiri</p>
              <p>Delivery</p>
              <p>Manual Labour</p>
              <p>Finance</p>
              <p>Office Staff</p>
              <p>Law, Public Safety and Security</p>
              <p>Sales</p>
            </div>
          </div>

          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 q-mt-md"
            style="text-align: center"
          >
            <div class="cat">CATEGORIES</div>
            <div>
              <p>Driver</p>
              <p>Engineer</p>
              <p>Hospitality &amp; Tourism</p>
              <p>Pet Care</p>
              <p>Tailor</p>
              <p>Education</p>
              <p>Management</p>
              <p>Beauty Salon</p>
              <p>Medical</p>
              <p>Fix &amp; Repair</p>
              <p>Videography</p>
              <p>Professional</p>
            </div>
          </div>

          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 q-mt-md"
            style="text-align: center"
          >
            <div class="cat">IMPORTANT LINKS</div>
            <div>
              <p>About MYC</p>
              <p>Term &amp; conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div class="text-center q-py-sm">
          &copy; 2022, MIZORAM YOUTH COMMISSION
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  // {
  //   title: "Home",
  //   link: "/",
  //   icon: "home",
  // },
  {
    title: "Professional",
    link: "/professional",
    icon: "mdi-account-box",
  },
  {
    title: "Job",
    link: "/job",
    icon: "mdi-account-edit",
  },
  {
    title: "Login/Singup",
    link: "/register",
    icon: "mdi-login-variant",
  },
];
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      // clickProfess() {
      //   router.push("/professional");
      // },
      clickImg() {
        router.push("/");
      },

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.img {
  max-width: 150px;
  min-width: 80;
}
.bg {
  background-color: #464d4d;
  color: white;
}
.head {
  color: black;
}

.cat {
  font-weight: bold;
  font-size: 20px;
}
.avatar {
  max-width: 220px;
}
</style>

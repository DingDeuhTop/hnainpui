<template>
  <q-page class="flex flex-center" style="background-color: #03a453">
    <div class="row full-width">
      <q-card square class="col-8 offset-2">
        <div class="row">
          <div class="col-xs-12 col-sm-6" style="background-color: #62c1fa">
            <q-card-section
              style="
                text-align: center;
                color: white;
                font-size: 30px;
                font-weight: bold;
              "
            >
              <p>Mizoram Youth Commission</p>
              <p class="text-h6" style="font-weight: bold; font-size: 40px">
                Hna Inpui
              </p>
              <p class="q-pt-xs" style="margin: 0 1px 0 auto">
                Login or Register
              </p>
            </q-card-section>
          </div>
          <div class="col-xs-12 col-sm-6 bg-white" style="margin: auto">
            <q-card-section>
              <div class="q-pb-xs">
                Login/Register to Hna Inpui using one time password
              </div>
              <div>
                <q-input
                  outlined
                  dense
                  v-model="phoneNumber"
                  type="number"
                  placeholder="Phone"
                />
              </div>

              <div>
                <q-btn
                  class="q-mt-xs"
                  icon="check"
                  label="Request OTP"
                  style="background-color: #03a453; color: white"
                  to="/detail"
                />
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const phoneNumber = ref("1231231231");
    return {
      phoneNumber,
    };
  },
};
</script>

<template>
  <q-page padding style="background-color: #03a453">
    <div>
      <q-card class="card">
        <div class="text-h5 q-pl-md">Detail Setup</div>
        <div>
          <q-card square style="background-color: #1e88e5; color: white">
            <q-card-section
              ><q-icon name="mdi-information" />
              He software hman hma hian i details engemaw i entir hmasak a ngai
              a. Heng ho hi tih sual palh neih pawhin nakin hnua la siam that
              theih tur a ni.
            </q-card-section>
          </q-card>
        </div>
        <q-stepper v-model="step" vertical color="primary" animated>
          <q-step :name="1" title="Photo" icon="mdi-numeric-1" :done="step > 1">
            <q-uploader
              url=""
              color="teal"
              flat
              bordered
              style="max-width: 300px" />

            <q-stepper-navigation>
              <q-btn
                color="primary"
                label="Save &amp; Continue"
                @click="step = 2"
              /> </q-stepper-navigation
          ></q-step>
          <q-step
            :name="2"
            title="Personal info"
            icon="mdi-numeric-2"
            :done="step > 2"
            ><div class="q-gutter-md">
              <q-input v-model="name" type="text" label="Name*" />
              <q-input v-model="phone" type="text" label="Phone*" />

              <div class="row">
                <div class="col-6">
                  <q-input
                    outlined
                    class="q-ma-sm"
                    v-model="houseno"
                    type="text"
                    label="HouseNumber"
                  />
                  <q-select
                    outlined
                    class="q-ma-sm"
                    v-model="district"
                    :options="options"
                    label="District"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    outlined
                    class="q-ma-sm"
                    v-model="khua"
                    type="text"
                    label="Khua*"
                  />
                  <q-input
                    outlined
                    class="q-ma-sm"
                    v-model="veng"
                    type="text"
                    label="veng*"
                  />
                </div>
              </div>

              <q-input v-model="landmark" type="text" label="Landmark" />
            </div>

            <q-stepper-navigation class="q-pt-xs">
              <q-btn color="primary" label="Continue" @click="step = 3" />
            </q-stepper-navigation>
          </q-step>
          <q-step :name="3" title="About" icon="mdi-numeric-2" :done="step > 3">
            <q-input
              outlined
              v-model="text"
              type="textarea"
              placeholder="Enter bio" />
            <q-btn
              class="q-mt-sm"
              color="primary"
              label="Continue"
              @click="step = 4" /></q-step
          ><q-step
            :name="4"
            title="Categories"
            icon="mdi-numeric-3"
            :done="step > 4"
          >
            <div class="row">
              <div
                class="col-xs-6 col-sm-4"
                v-for="(category, index) in categories"
                :key="index"
              >
                <q-toggle
                  v-model="togglevalues[index]"
                  :label="category"
                  color="green"
                />
              </div>
            </div>
            <q-btn flat label="next" @click="step = 5" /> </q-step
          ><q-step
            :name="5"
            title="Sub Categories"
            icon="mdi-numeric-4"
            :done="step > 5"
          >
            <div class="row">
              <div
                class="col-xs-6 col-sm-4"
                v-for="(subcategory, item) in category"
                :key="subcategory"
              >
                <q-toggle v-model="toggleitem[item]" color="green">
                  {{ subcategory }}
                </q-toggle>
              </div>
            </div>
            <q-btn color="primary" label="Finish" to="/account" />
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation> </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref();
    const phone = ref();
    const houseno = ref();
    const khua = ref();
    const veng = ref();
    const landmark = ref();
    const district = ref();
    const options = ref([
      "Aizawl",
      "Lunglei",
      "Lawngtlai",
      "Siaha",
      "Champhai",
      "Mamit",
      "Serchhip",
      "Kolasib",
    ]);
    const categories = [
      "Computer Professional",
      "Health & Fitness",
      "Music",
      "Photography",
      "Household Services",
      "Mistiri",
      "Delivery",
      "Manual Labour",
      "finance",
      "Office Staff",
      "Law, Public Safety And Security",
      "Sales",
      "Driver",
      "Engineer",
      "Hospitality & Tourism",
      "Pet Care",
      "Tailor",
      "Education",
      "Management",
      "Beauty Salon",
      "Medical",
      "Fix & Repair",
      "Videography",
      "Professional",
    ];
    const category = [
      "Graphic Designing",
      "Video Editing",
      "Computer Typing",
      "Printing",
      "Programmer",
      "Computer Operator",
      "Massage Therapy",
      "Fitness instructor",
      "Nursing Care",
      "Home Blood Collection",
      "REcording studio",
      "Music Track",
      "Wedding Photography",
      "Event Photography",
      "Portrait Photography",
      "Refrigerator",
      "Tv",
      "Tuizem Chhe Siam",
      "Computer",
      "Water Filter",
      "Air Conditioner",
      "Plumber",
      "Electrician",
      "Washing Machine",
      "Nauawm",
      "Maid Service",
      "Lung Mistiri",
      "Vinyl Floring",
      "Cement Mistiri",
      "Rawng Mistiri",
      "Floor Tile Phah",
      "Delivery",
      "Tui Sem",
      "Labour",
      "Huan Sam",
      "Peon",
      "Office Assistant",
      "Lawyer",
      "Lifeguard",
      "Paralegal",
      "Security Guard",
      "Sales Person",
      "Sales Manager",
      "Heavy Goods Motor Vehicle",
      "Heavy Passanger Motor Vehicle",
      "Excavator",
      "Bull Dozer",
      "LMV-non Transport",
      "LMV- TRansport",
      "Civil Engineer",
      "Mechanical Engineer",
      "Computer Engineer",
      "Automobile Engineer",
      "Chemical Engineer",
      "Cook",
      "Baker",
      "Chef",
      "Dishwasher",
      "Waiter/Waitress",
      "Catering",
      "Dog Trainer",
      "Pet Grooming",
      "Bag Thui",
      "Motor Seat",
      "Hmeichhe Thawmhnaw",
      "Mipa Thawmhnaw",
      "Home Tutor",
      "Private Coaching",
      "Teacher",
      "Advertising & Promotion Manager",
      "Advertising Sales Agent",
      "Marketing Manager",
      "Facial",
      "Steam Bath",
      "Lu met",
      "Hair Cutting",
      "Spa",
      "Health Worker",
      "MBBS",
      "Nurse",
      "Electronic Repair",
      "Mobile Repair",
      "Music video",
      "Advertisement",
      "Geologist",
    ];
    const togglevalues = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    const toggleitem = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    const text = ref();
    return {
      step: ref(1),
      name,
      phone,
      houseno,
      khua,
      veng,
      landmark,
      district,
      options,
      categories,
      togglevalues,
      text,
      toggleitem,
      category,
    };
  },
};
</script>

<style>
.card {
  max-width: 800px;
  min-width: 50px;
  margin: 0px auto;
}
</style>

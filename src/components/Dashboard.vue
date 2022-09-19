<template>
    <div class="wrapper">
        <div class="custom-date-picker">
            <Datepicker v-model="date" autoApply :maxDate="maxDate" @closed="onChange" :enableTimePicker="false">
            </Datepicker>
        </div>
        <div class="custom-table">
            <Vue3EasyDataTable :headers="headers" :items="items" :rows-per-page="10">
            </Vue3EasyDataTable>
        </div>
    </div>
</template>
  
<script lang="js">
import Vue3EasyDataTable from 'vue3-easy-data-table';
import Datepicker from '@vuepic/vue-datepicker';
import 'vue3-easy-data-table/dist/style.css';
import '@vuepic/vue-datepicker/dist/main.css'

export default ({
    components: { Vue3EasyDataTable, Datepicker },
    data() {
        return {
            headers: [],
            items: [],
            date: new Date(),
            maxDate: new Date()
        };
    },
    mounted() {

        this.headers = [
            { text: "Order Number", value: "ordernum" },
            { text: "Scenario", value: "scenario", sortable: true },
            { text: "Processed Date", value: "processed_dt", sortable: true },
            { text: "Reason", value: "reason", sortable: true }
        ];

        this.refreshData(this.date)
    },
    methods: {
        onChange() {
            this.refreshData(this.date)
        },
        refreshData(date) {
            const items = [];
            const max = 1000;
            const min = 100;
            const randomLength = Math.floor(Math.random() * (max - min) + min)
            for (let i = 0; i < randomLength; i++) {
                items.push({ "ordernum": "V40198" + i, "scenario": "Scenario " + i, "processed_dt": this.date.toLocaleString(), "reason": "Reason " + i })
            }
            this.items = items;
        }
    },
});
</script>

<style>
.wrapper {
    margin: 20px;
}

.custom-date-picker {
    width: 200px;
    margin-bottom: 20px;
    float: right;
}

.custom-table {
    margin-top: 50px;
    position: absolute;
    width: 100%;
}
</style>
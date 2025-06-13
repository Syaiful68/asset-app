<script setup>
import TableView from "@/components/tableView.vue";
import CardList from "./partials/cardList.vue";

const Lists = [
  {
    label: "Total",
    name: "total",
    total: 24,
    icon: "fa-database",
    color: "bg-dark",
  },
  {
    label: "Elektronik",
    name: "elektronik",
    total: 24,
    icon: "fa-computer",
    color: "bg-warning",
  },
  {
    label: "Furnitur",
    name: "furnitur",
    total: 102,
    icon: "fa-couch",
    color: "bg-success",
  },
  {
    label: "Machine",
    name: "machine",
    total: 12,
    icon: "fa-car-battery",
    color: "bg-secondary",
  },
];

const tableHeader = [
  { name: "Tags", label: "tags" },
  { name: "Item", label: "item" },
  { name: "Condition", label: "condition" },
  { name: "Location", label: "location" },
  { name: "Status", label: "status" },
  { name: "", label: "" },
];

const datas = [
  {
    tags: "DTB00092891",
    items: "Komputer Core i3",
    condition: "Good",
    location: "Tarutung",
    status: "Used",
  },
  {
    tags: "DTB00092892",
    items: "Mesin Jahit",
    condition: "Good",
    location: "Silangit",
    status: "Used",
  },
  {
    tags: "DTB00092893",
    items: "Komputer Core i3",
    condition: "Good",
    location: "Balige",
    status: "Used",
  },
];
</script>

<template>
  <!--  -->
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-12">
          <div class="row row-cards">
            <div
              class="col-sm-6 col-lg-3"
              v-for="(list, index) in Lists"
              :key="index"
            >
              <CardList
                :labels="list.label"
                :names="list.name"
                :total="list.total"
                :icons="list.icon"
                :color="list.color"
              ></CardList>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card">
            <TableView>
              <template #header>
                <div class="card-header">
                  <h3 class="card-title">Invoices</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-secondary">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          value="8"
                          size="3"
                          aria-label="Invoices count"
                        />
                      </div>
                      entries
                    </div>
                    <div class="ms-auto text-secondary">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          aria-label="Search invoice"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <!-- content -->
              <template #default>
                <table
                  class="table table-selectable card-table table-vcenter text-nowrap datatable"
                >
                  <thead>
                    <tr>
                      <th v-for="(list, index) in tableHeader" :key="index">
                        {{ list.label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in datas" :key="index">
                      <td>{{ item.tags }}</td>
                      <td>{{ item.items }}</td>
                      <td>{{ item.condition }}</td>
                      <td>{{ item.location }}</td>
                      <td>{{ item.status }}</td>
                      <td>edit</td>
                    </tr>
                  </tbody>
                </table>
              </template>
            </TableView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

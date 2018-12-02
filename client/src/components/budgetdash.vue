<template>
    <div class="charts">
        <div class="chart--dev">
            <ul class="chart--horiz">
                <li class="chart__bar" 
                    :style="{ width: budget.current*100/budget.limit + '%' }"
                    v-for="budget in budgets"
                    >
                <span class="chart__label">
                    {{ budget.type }}
                </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    categories: [
            {
            name:'Rent/Mortgage',
            id: 1
            },
            {
            name:'Utilities',
            id: 2
            },
            {
            name:'Entertainment',
            id: 3
            },
            {
            name:'Misc. Food',
            id: 4
            },
            {
            name:'Groceries',
            id: 5
            },
            {
            name:'Gas',
            id: 6
            },
            {
            name:'Mobile',
            id: 7
            },
            {
            name:'Subscriptions',
            id: 8
            },
            {
            name:'Clothing',
            id: 9
            },
            {
            name:'Charity',
            id: 10
            },
            {
            name:'Leisure',
            id: 11
            },
            {
            name:'Health',
            id: 12
            },
            {
            name:'Credit Card/Loan',
            id: 13
            },
            {
            name:'Deposit',
            id: 14
            },
            {
            name:'Withdrawal',
            id: 15
            }
        ],
    data() {
        return {
            budgets: [],
            errors: []
        }
  },
  beforeCreate(){
    axios
    .get("/api/budget")
    .then(res => {
        this.budgets = []
        res.data.forEach(budget => {
          let limit = parseInt(res.ammount)
          let category = parseInt(res.categoryID)
          let type = this.categories[parseInt(category) -1].name
          axios.get("/api/transactions").then( res=> {
            res.data.forEach(transaction =>{
              let total = parseInt(res.categoryTotals[category])
              let current = limit - total
              this.budgets.push({
                limit: limit,
                type: type,
                current: current,
              })
            })
          })
        })
    }).catch(err => console.error(err))
  }
};
</script>

<style>
/*graphdesign: https://codepen.io/vajkri/pen/NxzZwL*/
@mixin stagger-anim-delay($i, $initial-delay, $stagger-delay) {
  @while $i > 0 {
    &:nth-of-type(#{$i}) {
      animation-delay: $initial-delay + $stagger-delay * $i;
    }
    $i: $i - 1;
  }
}
.charts {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
}
.chart--horiz {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.chart__bar {
  $border-rad: 4px;
  height: 30px;
  margin-bottom: 10px;

  background: linear-gradient(to left, #85f2a0, #50bf80);
  border-top-right-radius: $border-rad;
  border-bottom-right-radius: $border-rad;
  opacity: 0;

  animation: 1s anim-lightspeed-in ease forwards;

  .chart--dev & {
    @include stagger-anim-delay(11, 0.5s, 0.2s);
  }
  .chart--prod & {
    @include stagger-anim-delay(2, 3.8s, 0.2s);
  }
  .chart--design & {
    @include stagger-anim-delay(3, 5s, 0.2s);
  }
}
.chart__label {
  line-height: 30px;
  color: #163840;
}
@keyframes anim-lightspeed-in {
  0% {
    transform: translateX(-200%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
ul {
  list-style-type: none;
}
</style>

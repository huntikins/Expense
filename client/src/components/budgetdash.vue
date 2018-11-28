
<template>
    <div class="charts">
        <div class="chart--dev">
            <ul class="chart--horiz">
                <li class="chart__bar" 
                    :style="{ width: budget.current*100/budget.limit + '%' }"
                    v-for="budget in budgets"
                    >
                <span class="chart__label">
                    ${{ budget.limit - budget.current }} left for {{ budget.type }}
                </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            budgets: [{
                type: 'Gas',
                limit: 200,
                current: 100,
                //percent: current*100/limit
            },
            {
                type: 'Groceries',
                limit: 400,
                current: 175,
                //percent: current*100/limit
            },
            {
                type: 'Entertainment',
                limit: 200,
                current: 50,
                //percent: current*100/limit
            },
            {
                type: 'Lesiure',
                limit: 50,
                current: 25,
                //percent: current*100/limit
            }
            ]
        }
    }
}
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

  background: linear-gradient(to left, #85F2A0, #50BF80);
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
  color: white;
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

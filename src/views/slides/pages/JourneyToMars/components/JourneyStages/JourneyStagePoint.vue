<template>
  <flex-row noWrap class="stage-point" :style="{left: offsetX+'px', top: point.offsetY+'px'}" :class="status">
    <div class="point"></div>
    <div class="stage-point-tooltip">
      {{point.description}}
    </div>
  </flex-row>

</template>

<script>
export default {
  name: 'JourneyStagePoint',
  props: {
    point: Object,
    status: String,
    offsetX: Number
  }
}
</script>

<style scoped lang="scss">
  .stage-point {
    position: absolute;
  }
  .point {
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    cursor: pointer;
  }
  .stage-point-tooltip {
    display: none;
    width: 156px;
    padding: 0.35em 1em;
    box-sizing: border-box;
    border-radius: 0 20px 20px 20px;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    margin-left: 0.3em;
  }
  .point:hover + .stage-point-tooltip {
    display: block;
  }

  .stage-point.passed {
    .point {
      background: rgba($white, 0.05);
      border: 1px solid rgba($white, 0.5);
      box-sizing: border-box;
      box-shadow: 0px 0px 16px rgba($white, 0.5);
    }
    .stage-point-tooltip {
      color: $white;
      background: rgba($white, 0.1);
      border: 1px solid rgba($white, 0.05);
    }
  }

  .stage-point.future {
    .point {
      background: rgba($color-primary, 0.3);
      border: 1px solid rgba($color-primary, 0.5);
      box-sizing: border-box;
      box-shadow: 0px 0px 16px rgba(241, 146, 4, 0.5);
    }
    .stage-point-tooltip {
      color: $color-primary;
      background: rgba($color-primary, 0.1);
      border: 1px solid rgba($color-primary, 0.05);
    }
  }

</style>

<template>
    <div class="song-row song-row-new">
        <div class="song-header" v-if="title">
            <div :class="'row-title ' + (noactions ? 'row-title-noactions' : '')">{{ title }}</div>
            <div class="row-controls" v-if="!noactions">
                <slot name="controls"></slot>
            </div>
        </div>
        <div class="song-list">
            <slot name="song-list"></slot>
        </div>
        <div class="noresults">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SongRow',
        props: [
            'title',
            'noactions'
        ]
    }
</script>

<style scoped lang="less">
    .song-row {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-gap: 5px;

        & .song-header {
            display: grid;
            grid-template-columns: 1fr auto;

            & .row-title {
                letter-spacing: 0.25em;
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;

                &.row-title-noactions {
                    margin: 10px 0px;
                }
            }
            & .row-controls {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 15px;

                & .item {
                    width: 28px;
                    height: 28px;
                    font-size: 22px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &.disabled {
                        opacity: 0.4;
                    }

                    &:not(.disabled):hover {
                        background: rgba(255,255,255,0.2);
                        cursor: pointer;
                    }
                }
            }
        }
        & .song-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 15px;
        }
        & .song-list-noresults {
            display: none;
            background: rgba(255,255,255,0.1);
            border-radius: 6px;
            padding: 25px;
            opacity: 0.6;
            text-align: center;

            &.active {
                display: block;
            }
        }

    }
</style>

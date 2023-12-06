<template>
  <div id="Nastya">
    <h1>Моя любимая Настюшка!</h1>
    <div>
        <div>Хочу поздравить тебя с днём рождения!</div><img class="Nastya_img" src="../assets/pictures/pic1.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic1.png"/>  <div>blablabla</div>
    </div>
    <div>
        <div>Хочу поздравить тебя с днём рождения!</div><img class="Nastya_img" src="../assets/pictures/pic1.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Nastya_img" src="../assets/pictures/pic1.png"/>  <div>blablabla</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#Nastya
{
    display: flex;
    flex-direction: column;
    div
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
    }

}
.Nastya_img
    {
        width: 50%;
        margin: 0;
    }
</style>
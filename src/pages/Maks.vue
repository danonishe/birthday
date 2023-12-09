<template>
 <div id="Maks">
  <h1 >Максончик-чипсончик!</h1>
    <div>
        <div class="Maks_text">
          <span>С днем рождения!!!<br>Уже 20 лет существует такой светлый и добрый человек, как ты. 
          Всё время нашего знакомства от тебя исходила только энергия позитива и добра, и я желаю, чтобы она в тебе оставалась всегда!</span>
        </div>
        <img class="Maks_img" src="../assets/pictures/pic16.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Maks_img" src="../assets/pictures/pic15.png"/> 
       <div class="Maks_text"><span>Желаю тебе в кошелке иметь столько денег, чтобы никогда больше не приходилось воровать одежду у Маши. </span></div>
    </div>
    <div>
        <div class="Maks_text">
          <span>Желаю тебе по жизни смотреть не только в правую сторону...</span>
        </div>
        <img class="Maks_img" src="../assets/pictures/pic19.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Maks_img" src="../assets/pictures/pic18.png"/> 
       <div class="Maks_text"><span>Но и не забывать про левую! </span></div>
    </div>
    <div>
        <div class="Maks_text">
          <span>Не забывай также смотреть вверх, чтобы видеть свои цели, мечты и амбиции!</span>
        </div>
        <img class="Maks_img" src="../assets/pictures/pic17.png"/>
    </div>
    <div style="background: #b8ecfc">
      <img class="Maks_img" src="../assets/pictures/pic14.png"/> 
       <div class="Maks_text"><span>Пусть улыбка всегда остается на твоем лице, несмотря на то, что происходит в жизни.</span></div>
    </div>
    <div>
        <div class="Maks_text">
          <span>Помни, что твои близкие всегда будут рядом :)</span>
        </div>
        <img class="Maks_img" src="../assets/pictures/pic20.png"/>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#Maks
{
    display: flex;
    flex-direction: column;
    div
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        text-align:justify; 
    }

}
.Maks_text
{
  padding: 2%;
}
.Maks_img
    {
        width: 50%;
        margin: 0;
        border: 2px rgb(174, 174, 231) solid;
    }
</style>
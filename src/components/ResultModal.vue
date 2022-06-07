<template>
  <div class="modal-overlay">
    <div class="modal">
      <img class="check" src="../assets/check-icon.png" alt="" />
      <h6>Does Scientific Computing Facility support</h6>
      <h6>
        <i>"{{ result }}"</i>?
      </h6>
      <div v-show="showResult">
        <h3>
          <font-awesome-icon v-if="correct" class="ml-3" icon="fa-solid fa-smile-wink" size="lg" />
          <font-awesome-icon v-else class="ml-3" icon="fa-solid fa-sad-tear" size="lg" />
        </h3>
      </div>
      <button class="yes" @click="yes">
        Yes
        <font-awesome-icon class="ml-3" icon="fa-solid fa-thumbs-up" size="lg" />
      </button>
      <button class="no" @click="no">
        No
        <font-awesome-icon class="ml-3" icon="fa-solid fa-thumbs-down" size="lg" />
      </button>
      <br />
      <button @click="close">Close</button>
    </div>
    <div class="close" @click="close">
      <img class="close-img" src="../assets/close-icon.svg" alt="" />
    </div>
  </div>
</template>

<script>
const correct = new Audio(require('../assets/correct.mp3'));
const wrong = new Audio(require('../assets/wrong.mp3'));

export default {
  components: {},
  props: ['result', 'answer'],
  data() {
    return {
      showResult: false,
      correct: false,
      correctOrNot: ''
    };
  },

  methods: {
    close() {
      this.showResult = false;
      this.correctOrNot = '';
      this.$emit('close');
    },
    yes() {
      if (this.answer) {
        correct.play();
        this.correct = true;
        this.correctOrNot = 'Correct!';
      } else {
        wrong.play();
        this.correct = false;
        this.correctOrNot = 'Wrong!';
      }
      this.showResult = true;
    },
    no() {
      if (!this.answer) {
        correct.play();
        this.correct = true;
        this.correctOrNot = 'Correct!';
      } else {
        wrong.play();
        this.correct = false;
        this.correctOrNot = 'Wrong!';
      }
      this.showResult = true;
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 2;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 600px;
  margin-top: 30%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

.yes {
  background-color: #4fa6b2;
  width: 150px;
}

.no {
  background-color: #c74342;
  width: 150px;
}
</style>

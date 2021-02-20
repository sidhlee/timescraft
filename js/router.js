import state, { loadState } from './state.js';
import { updateResults, showLevelUpMessage } from './results.js';
import { updateDashboard } from './helpers.js';

export function goTo(to) {
  switch (to) {
    case 'start':
      return goToStart();
    case 'play':
      return goToPlay();
    case 'results':
      return goToResults();
    case 'gameover':
      return goToGameOver();
    default:
      goToStart();
  }
}

function goToStart() {
  $('.menu-btn').addClass('hidden');
  $('.sc-play').addClass('hidden');
  $('.overlay').addClass('hidden');
  $('.menu').addClass('hidden');

  loadState();
  updateDashboard();

  $('.app').addClass('parallax');
  $('.sc-start').removeClass('hidden');
}

function goToPlay() {
  $('.app').removeClass('parallax');

  $('.sc-play').removeClass('hidden');
  $('.menu-btn').removeClass('hidden');

  $('.sc-start').addClass('hidden');
  $('.overlay').addClass('hidden');
  $('.menu').addClass('hidden');
}

function goToResults() {
  $('.app').addClass('parallax');

  $('.sc-start').addClass('hidden');
  $('.sc-play').addClass('hidden');
  $('.menu-btn').addClass('hidden');
  $('.menu').addClass('hidden');

  const { isUp } = updateResults();

  $('.overlay').removeClass('hidden');

  if (isUp) showLevelUpMessage();
}

function goToGameOver() {
  $('.app').addClass('parallax');

  $('.results--score').addClass('hidden');
  $('.sc-start').addClass('hidden');
  $('.sc-play').addClass('hidden');
  $('.overlay').addClass('danger');
  $('.menu').addClass('hidden');

  $('.menu-btn').removeClass('hidden');
  $('.overlay').removeClass('hidden');
  $('.results--died').removeClass('hidden');
}

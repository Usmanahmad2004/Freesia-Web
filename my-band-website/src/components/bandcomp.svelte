<script lang="ts">
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { isLabeledStatement } from 'typescript';

 
  let clicked = false;
  let tag = '0';
  let islandPosition = { x: 0, y: 0 };

 
  function handleTopLeftClick() {
    
    console.log("Top left arrow clicked. Gliding content out.");
    clicked = !clicked;
    
    
    if (clicked) {
      tag = '1';
      islandPosition = { x: 900, y: 300 };
    } else {
      tag = '0';
      islandPosition = { x: 0, y: 0 };
    }
  }
  function handleTopRightClick() {
    
    console.log("Top right arrow clicked. Gliding content out.");
    clicked = !clicked;
    
    
    if (clicked) {
      tag = '2';
      islandPosition = { x: -900, y: 300 };
    } else {
      tag = '0';
      islandPosition = { x: 0, y: 0 };
    }
  }
  function handleBottomClick() {
   
    console.log("bottom arrow clicked. Gliding content out.");
    clicked = !clicked;
    
    
    if (clicked) {
      tag = '3';
      islandPosition = { x: 0, y: -400 };
    } else {
      tag = '0';
      islandPosition = { x: 0, y: 0 };
    }
  }
  

  onMount(() => {
    const tlbtn = document.getElementById("top-left-arrow");
    const trbtn = document.getElementById("top-right-arrow");
    const btmbtn = document.getElementById("bottom-arrow");
    

    if (tlbtn) {
      tlbtn.addEventListener("click", handleTopLeftClick);
      console.log("Listener attached to 'top-left-arrow'");
    } 
    if (trbtn) {
      trbtn.addEventListener("click", handleTopRightClick);
      console.log("Listener attached to 'top-left-arrow'");
    } 
    if (btmbtn) {
      btmbtn.addEventListener("click", handleBottomClick);
      console.log("Listener attached to 'top-left-arrow'");
    } 
    
    
    
  });
</script>

<div style="display: none;" data-island-x={islandPosition.x} data-island-y={islandPosition.y} data-clicked={clicked} data-tag={tag}></div>
<script lang="ts">
    import {onMount} from 'svelte';
    import {fade, fly} from 'svelte/transition';
    import {cubicOut} from 'svelte/easing';
    


    type Position = 'top-left' | 'top-right' | 'bottom';
    type SectionID = 'guitar' | 'bass' | 'drums' | null;


    interface BandMembers {
        id: 'guitar' | 'bass' | 'drums';
        name: string;
        instrument: string;
        position: Position;

    }

    //variables
    let active: SectionID = null;
    let showMain: boolean = true;
    let mounted: boolean = false;

    // Band members data
  const bandMembers: BandMembers[] = [
    { 
      id: 'guitar', 
      name: 'Ismael', 
      instrument: 'Guitar',
      position: 'top-left'
    },
    { 
      id: 'bass', 
      name: 'Julian', 
      instrument: 'Bass',
      position: 'top-right'
    },
    { 
      id: 'drums', 
      name: 'Usman', 
      instrument: 'Drums',
      position: 'bottom'
    }
  ];

  // Navigate to a section when arrow is clicked
  function navigateToSection(sectionId: 'guitar' | 'bass' | 'drums'): void {
    showMain= false;
    active= sectionId;
  }

  // Return to main view
  function returnToMain(): void {
    active = null;
    showMain = true;
  }

  onMount(() => {
    mounted = true;
  });


</script>
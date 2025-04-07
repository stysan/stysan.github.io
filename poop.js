if (Scratch.extensions.unsandboxed) {
  alert('You\'re giving poop too much power!');
  throw new Error('You\'re giving poop too much power!');
}

class Poop {
  getInfo() {
    return {
      id: 'poop',
      name: 'Poop',
      color1: '#59c059', // block color
      color2: '#389438', // tab outline
      color3: '#389438', // block outline
      blocks: [
        {
          opcode: 'poop',
          blockType: Scratch.BlockType.REPORTER,
          text: '[AMOUNT] poop',
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }
      ]
    };
  }

  poop(args) {
    // Repeats 'poop ' an AMOUNT of times
    // then trims space at the end of the poopstring
    if (Number(args.AMOUNT) < 10000) {
      return 'poop '.repeat(Scratch.Cast.toNumber(args.AMOUNT)).trim();
    } else {
      return 'With great poower, comes great respoonsibility'
    }
  }
}

Scratch.extensions.register(new Poop());

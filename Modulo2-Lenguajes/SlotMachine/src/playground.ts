enum TypeCoin {
    MonedaUno = 1,
    MonedaDos,
    MonedaTres
}


class SlothMachine {
    constructor() {
        this.Money = 0;
    }

    private Money: number;

    // Get Randon value true or false
    private GetRamdon(): boolean {
        return !!Math.floor(Math.random() * 2);
    }

    public play(Coin: TypeCoin = TypeCoin.MonedaUno): void {
        this.Money += Coin;
        if (this.GetRamdon && this.GetRamdon() && this.GetRamdon) {
            console.log(`Congratulations!!!. You won ${this.Money} coins!!`);
            this.Money = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play(TypeCoin.MonedaTres);
machine1.play(TypeCoin.MonedaDos);
machine1.play();
machine1.play(); 
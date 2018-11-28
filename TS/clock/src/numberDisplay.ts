class numberDisplay {

    private value: number
    private limit: number

    public constructor(value: number, limit: number) {
        this.value = value
        this.limit = limit
    }

    public increment(): void {
        if (this.value === this.limit) {
            this.value = 0;
        } else {
            this.value++
        }
    }

    public getValue(): number {
        return this.value
    }

}
import { Seller } from './seller.model';

export class Game {
    name: string;
    dateRelease: Date;
    imageUrl?: string;
    sellers?: Seller[];

    constructor(
        name?: string,
        dateRelease?: string,
        imageUrl?: string,
        sellers?: Seller[],
    ) {
        this.name = name;
        this.dateRelease = new Date(dateRelease);
        this.imageUrl = imageUrl;
        this.sellers = sellers;
    }

    getYearsFromRelease(): number {
        const milisecondsRange = this.millisecondsRange(
            this.dateRelease.getTime()
        );
        return this.convertToYears(
            new Date(milisecondsRange)
        );
    }

    private millisecondsRange = (
        milisecondsStart: number,
        milisecondsEnd: number = Date.now()
    ) => milisecondsEnd - milisecondsStart

    private convertToYears = (date: Date): number => (
        date.getUTCFullYear() - 1970
    )

}

import {Bedrijf} from './Bedrijf';
import {Periode} from './Periode';
export class Opgave
{
    OpgaveId: number;
    BeId: number;
    PeriodeId: number;
    OmzetInclusiefbtw: number;
    Btw: number;
    Bedrijf: Bedrijf;
    Periode : Periode;
}
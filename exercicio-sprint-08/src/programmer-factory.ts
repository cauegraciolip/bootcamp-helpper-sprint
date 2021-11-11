import { IProgrammer } from "./object-interface";

export abstract class ProgrammerFactory {

    /**
     * Método abstrato de uma factory. O método foi criado para ser estendido e se possível reaproveitado.
     * @param id number : número aleatório para identificação;
     * @param name string : nome curto de algo ou alguém;
     * @param bio string : biografia ou resumo de algo ou alguém.
     */
    protected abstract getProgrammer(id: number, name: string, bio: string) : IProgrammer;
};

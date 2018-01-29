class bestLocalHit():
    def __init__(self, arglen, iden, evalue, cov, bitscore):
        self.info = 'quantification using bedtools clustering'
        self.arglen = arglen
        self.iden = iden
        self.evalue = evalue
        self.cov = cov
        self.bitscore = bitscore

    def quant(self, input, database):
        from validation.AnnotationMethods import quant as Quant
        Quant(input, self.arglen, self.iden, self.evalue, self.cov, self.bitscore, database)
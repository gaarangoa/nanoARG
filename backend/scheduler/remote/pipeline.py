import utils
import sys
import conf

sys.path.insert(0, conf.add_python_path)
from remote.tools import bestLocalHitClass as BestHit

input = sys.argv[1];
output = sys.argv[2];
barcodes = sys.argv[3];
step = sys.argv[4];
utils.mkdir_p(output);


_IDEN = 0
_EVALUE = 1e-10
_COVERAGE = 0.5
_BITSCORE = 50


# Demultiplex fasta reads
# if step=='demux': 
#     Demux = utils.demux_hash();
#     demux_reads = Demux.barcodes(input, barcodes, output);
# Correct reads using demultiplexed reads
if step=='correct': 
    Correct = utils.canu();
    corrected_reads = Correct.correct(input);
# Merge reads that are not demultiplexed
if step=='merge': 
    Merge = utils.rawreads();
    merged_reads = Merge.merge(input)

################ ARGs-RESFAMS Align reads 
from remote.pipelines.resfamsClass import hmmer as Resfams
if step=='resfams': 
    Align = Resfams();
    args_aligned_file = Align.align(input);
    Annotation = BestHit.bestLocalHit(conf.tools+'Resfams-full.size', _IDEN, _EVALUE, _COVERAGE, _BITSCORE);
    annotation = Annotation.quant(args_aligned_file, 'resfams');


########### Mobile Genetic Element
from remote.pipelines.mgeClass import MGEs
if step=='aclame': 
    mges = MGEs()
    mges_aligned_file = mges.align(input)
    mgesAnnotation = BestHit.bestLocalHit(conf.data+"aclame.size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
    mgesAnn = mgesAnnotation.quant(mges_aligned_file, 'aclame')



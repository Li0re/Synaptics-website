import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
    const { t } = useLanguage();

    return (
        <Layout variant="light">
            <div className="bg-white min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Conditions Générales d'Utilisation</h1>
                    <p className="text-gray-500 mb-12">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">1. Acceptation des conditions</h2>
                        <p className="mb-6">
                            En accédant au site web de Synaptics et en l'utilisant, vous acceptez d'être lié par les présentes conditions générales d'utilisation, toutes les lois et réglementations applicables, et vous acceptez d'être responsable du respect de toutes les lois locales applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">2. Description du service</h2>
                        <p className="mb-6">
                            Synaptics fournit des solutions d'intelligence artificielle pour l'automatisation des processus d'entreprise, y compris des agents vocaux, le traitement de documents et l'automatisation des flux de travail. L'utilisation de ces services peut être soumise à des contrats de service spécifiques supplémentaires.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">3. Licence d'utilisation</h2>
                        <p className="mb-6">
                            La permission est accordée de télécharger temporairement une copie des documents (informations ou logiciels) sur le site web de Synaptics pour une visualisation transitoire personnelle et non commerciale uniquement. Il s'agit de l'octroi d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Modifier ou copier le matériel ;</li>
                            <li>Utiliser le matériel à des fins commerciales ou pour toute présentation publique (commerciale ou non commerciale) ;</li>
                            <li>Tenter de décompiler ou de faire de l'ingénierie inverse sur tout logiciel contenu sur le site web de Synaptics ;</li>
                            <li>Supprimer tout droit d'auteur ou autre mention de propriété du matériel ; ou</li>
                            <li>Transférer le matériel à une autre personne ou "miroir" du matériel sur tout autre serveur.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">4. Facturation et Paiements</h2>
                        <p className="mb-6">
                            Les conditions de paiement pour nos services sont définies dans nos contrats de service spécifiques ou sur notre page de tarification. Tous les frais sont indiqués en Euros (€) sauf indication contraire.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">5. Limitation de responsabilité</h2>
                        <p className="mb-6">
                            En aucun cas, Synaptics ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'incapacité d'utiliser le matériel sur le site web de Synaptics, même si Synaptics ou un représentant autorisé de Synaptics a été informé oralement ou par écrit de la possibilité de tels dommages.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">6. Exactitude des matériaux</h2>
                        <p className="mb-6">
                            Le matériel apparaissant sur le site web de Synaptics pourrait inclure des erreurs techniques, typographiques ou photographiques. Synaptics ne garantit pas que les documents de son site web sont exacts, complets ou à jour. Synaptics peut apporter des modifications au matériel contenu sur son site web à tout moment et sans préavis.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">7. Liens</h2>
                        <p className="mb-6">
                            Synaptics n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation du site par Synaptics. L'utilisation de tout site web lié est aux risques et périls de l'utilisateur.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">8. Loi applicable</h2>
                        <p className="mb-6">
                            Ces termes et conditions sont régis et interprétés conformément aux lois de la France et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux de cet État ou de cet endroit.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">9. Nous contacter</h2>
                        <p className="mb-6">
                            Pour toute question concernant ces Conditions d'Utilisation, veuillez nous contacter à : hello@synaptics.fr
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfService;

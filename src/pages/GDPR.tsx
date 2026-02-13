import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const GDPR = () => {
    const { t } = useLanguage();
    const lastUpdated = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <Layout variant="light">
            <div className="pt-32 pb-20 bg-white min-h-screen">
                <div className="container max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                        Conformité RGPD
                    </h1>
                    <p className="text-gray-500 mb-12">
                        Dernière mise à jour : {lastUpdated}
                    </p>

                    <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-black prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        <section className="mb-12">
                            <h2>1. Introduction</h2>
                            <p>
                                Chez Synaptics, nous nous engageons à protéger vos données personnelles et à respecter votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD). Cette page détaille notre approche de la conformité et vos droits en tant qu'utilisateur.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2>2. Principes fondamentaux</h2>
                            <p>
                                Nous traitons vos données selon les principes suivants :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Licéité, loyauté et transparence :</strong> Vos données sont traitées de manière légale et transparente.</li>
                                <li><strong>Limitation des finalités :</strong> Vos données sont collectées pour des objectifs déterminés, explicites et légitimes.</li>
                                <li><strong>Minimisation des données :</strong> Nous ne collectons que les données strictement nécessaires.</li>
                                <li><strong>Exactitude :</strong> Nous veillons à ce que vos données soient exactes et tenues à jour.</li>
                                <li><strong>Limitation de la conservation :</strong> Vos données ne sont conservées que le temps nécessaire.</li>
                                <li><strong>Intégrité et confidentialité :</strong> Vos données sont traitées de manière à garantir leur sécurité.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2>3. Vos droits</h2>
                            <p>
                                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles.</li>
                                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes ou incomplètes.</li>
                                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données ("droit à l'oubli").</li>
                                <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander de limiter l'utilisation de vos données.</li>
                                <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données pour les transmettre à un tiers.</li>
                                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2>4. Transfert de données</h2>
                            <p>
                                Vos données sont hébergées au sein de l'Union Européenne. Si un transfert hors UE est nécessaire, nous nous assurons qu'il est encadré par des garanties appropriées (clauses contractuelles types, décisions d'adéquation) pour assurer un niveau de protection équivalent.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2>5. Délégué à la Protection des Données (DPO)</h2>
                            <p>
                                Pour toute question relative à la protection de vos données ou pour exercer vos droits, vous pouvez contacter notre Délégué à la Protection des Données :
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                                <p className="font-semibold">DPO Synaptics</p>
                                <p>Email : <a href="mailto:dpo@synaptics.fr">dpo@synaptics.fr</a></p>
                                <p>Adresse : Paris, France</p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2>6. Réclamation</h2>
                            <p>
                                Si vous estimez, après nous avoir contactés, que vos droits "Informatique et Libertés" ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default GDPR;

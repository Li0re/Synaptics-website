import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    return (
        <Layout variant="light">
            <div className="bg-white min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Politique de Confidentialité</h1>
                    <p className="text-gray-500 mb-12">Dernière mise à jour : {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">1. Introduction</h2>
                        <p className="mb-6">
                            Chez Synaptics, nous prenons votre vie privée au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web et utilisez nos services d'agents IA.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">2. Collecte des informations</h2>
                        <p className="mb-6">
                            Nous pouvons collecter des informations vous concernant de différentes manières, notamment :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Informations personnelles :</strong> Nom, adresse email, numéro de téléphone, nom de l'entreprise, et autres informations que vous nous fournissez volontairement via nos formulaires de contact.</li>
                            <li><strong>Données d'utilisation :</strong> Informations sur la façon dont vous accédez et utilisez le site, y compris votre adresse IP, le type de navigateur, et les pages visitées.</li>
                            <li><strong>Données des agents IA :</strong> Dans le cadre de nos services, nous pouvons traiter des données vocales et textuelles nécessaires au fonctionnement de nos agents conversationnels.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">3. Utilisation des informations</h2>
                        <p className="mb-6">
                            Nous utilisons les informations collectées pour :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Fournir, exploiter et maintenir nos services</li>
                            <li>Améliorer, personnaliser et développer notre site web et nos produits</li>
                            <li>Comprendre et analyser comment vous utilisez nos services</li>
                            <li>Développer de nouveaux produits, services, caractéristiques et fonctionnalités</li>
                            <li>Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires, y compris pour le service client</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">4. Partage des informations</h2>
                        <p className="mb-6">
                            Nous ne vendons, n'échangeons, ni ne louons vos informations personnelles d'identification à des tiers. Nous pouvons partager des informations démographiques agrégées génériques non liées à des informations personnelles d'identification concernant les visiteurs et les utilisateurs avec nos partenaires commerciaux, affiliés de confiance et annonceurs.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">5. Sécurité des données</h2>
                        <p className="mb-6">
                            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger contre l'accès non autorisé, l'altération, la divulgation ou la destruction de vos informations personnelles, nom d'utilisateur, mot de passe, informations de transaction et données stockées sur notre site. Tous les échanges de données sensibles et privées entre le site et ses utilisateurs se font via un canal de communication sécurisé SSL.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">6. Vos droits (RGPD)</h2>
                        <p className="mb-6">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification de vos données</li>
                            <li>Droit à l'effacement ("droit à l'oubli")</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>Droit d'opposition</li>
                        </ul>
                        <p className="mb-6">
                            Pour exercer ces droits, veuillez nous contacter à : compliance@synaptics.fr
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">7. Modifications de cette politique</h2>
                        <p className="mb-6">
                            Synaptics a la discrétion de mettre à jour cette politique de confidentialité à tout moment. Nous vous encourageons à consulter fréquemment cette page pour rester informé des changements.
                        </p>

                        <h2 className="text-2xl font-semibold text-black mt-12 mb-6">8. Nous contacter</h2>
                        <p className="mb-6">
                            Si vous avez des questions sur cette politique de confidentialité, les pratiques de ce site ou vos relations avec ce site, veuillez nous contacter à :
                        </p>
                        <p className="font-medium">
                            Synaptics AI<br />
                            Paris, France<br />
                            Email: hello@synaptics.fr
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;

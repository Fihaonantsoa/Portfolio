export default function SilverCard() {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg p-10 mt-10">
      {/* Background dégradé argenté */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0] via-[#D3D3D3] to-[#E8E8E8] z-0" />

      {/* Effet éclat (gonflement au hover) */}
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-2xl opacity-20 transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-all duration-500 ease-out" />

      {/* Contenu visible */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Zone argentée</h2>
        <p className="text-gray-600 mt-2">Contenu dans un style métallique élégant.</p>
      </div>
    </div>
  );
}

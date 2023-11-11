import React from 'react'

 const Testimonios = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 p-8 ">
    
    <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl transition duration-300 hover:shadow-brillante hover:scale-105">
      <p className="text-gray-500">
        "Incredible results from this marketing team! They not only boosted my business's online presence but also took the time to understand my unique needs. Highly recommend for a tailored, effective strategy."
      </p>
      <div className="flex items-center gap-4">
        <img
          src="https://img.freepik.com/foto-gratis/freelancer-mujer-glamorosa-disfrutando-manana-trabajando-portatil-foto-dama-latina-alegre-camisa-cuadros-posando-gafas_197531-10658.jpg"
          className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
        />
        <div>
          <h3 className="text-indigo-500 font-bold">
            Elba Moreno Gonzalez
          </h3>
          <p className="text-gray-500 font-medium">SEO, Grupo Cimarrón</p>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl transition duration-300 hover:shadow-brillante hover:scale-105">
      <p className="text-gray-500">
        "Choosing this digital marketing service was a game-changer for my small business. The team's expertise and personalized attention exceeded my expectations. Finally, a marketing solution that gets real results"
      </p>
      <div className="flex items-center gap-4">
        <img
          src="https://img.freepik.com/foto-gratis/foto-feliz-adorable-mujer-africana-rizada-sentada-frente-computadora-portatil-abierta-cafeteria-acera-satisfecha-hacer-buena-presentacion_273609-3488.jpg"
          className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
        />
        <div>
          <h3 className="text-indigo-500 font-bold">
            Ximena Araiza Mendoza
          </h3>
          <p className="text-gray-500 font-medium">
            Gerente TI, Grupo Bafar
          </p>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl transition duration-300 hover:shadow-brillante hover:scale-105">
      <p className="text-gray-500">
        "Couldn't be happier with the impact this digital marketing service had on my online presence. They went above and beyond to understand my goals, resulting in increased engagement and a noticeable uptick in sales. Highly satisfied"
      </p>
      <div className="flex items-center gap-4">
        <img
          src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-mascarilla-usando-su-computadora-portatil-mientras-sentado-escaleras-al-aire-libre-concepto-negocio-nuevo-concepto-estilo-vida-normal_58466-14709.jpg"
          className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
        />
        <div>
          <h3 className="text-indigo-500 font-bold">José Luis Trejo</h3>
          <p className="text-gray-500 font-medium">
            Community manager, Facebook
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Testimonios
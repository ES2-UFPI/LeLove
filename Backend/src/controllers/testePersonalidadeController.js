exports.submitResponses = (req, res) => {
    const { responses } = req.body;
    
    // Processar as respostas aqui
    console.log("Respostas recebidas:", responses);
  
    // Retornar uma resposta de sucesso
    res.status(201).json({ message: 'Respostas recebidas com sucesso', responses });
  };
  
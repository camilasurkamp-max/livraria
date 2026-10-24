
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState(null);
  const [erro, setErro] = useState("");

  async function buscar() {
    const numero = cnpj.replace(/\D/g, "");

    if (numero.length !== 14) {
      setErro("Digite um CNPJ com 14 números.");
      setEmpresa(null);
      return;
    }

    try {
      const resposta = await fetch(
        `https://www.receitaws.com.br/v1/cnpj/${numero}`
      );
      const dados = await resposta.json();

      if (!resposta.ok || dados.status === "ERROR") {
        setErro(dados.message || "CNPJ não encontrado.");
        setEmpresa(null);
        return;
      }

      setErro("");
      setEmpresa(dados);
    } catch {
      setErro("Não foi possível consultar o CNPJ.");
      setEmpresa(null);
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar CNPJ" }} />

      <TextInput
        style={styles.campo}
        value={cnpj}
        onChangeText={setCnpj}
        placeholder="Digite o CNPJ"
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscar} />

      {!!erro && <Text style={styles.erro}>{erro}</Text>}
      {!!empresa && (
        <>
          <Text style={styles.titulo}>{empresa.nome}</Text>
          <Text>{empresa.logradouro}</Text>
          <Text>{empresa.bairro}</Text>
          <Text>
            {empresa.municipio} {empresa.uf}
          </Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 6,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "600",
  },
});